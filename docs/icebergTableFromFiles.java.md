# `icebergTableFromFiles` Submodule <a name="`icebergTableFromFiles` Submodule" id="@cdktn/provider-snowflake.icebergTableFromFiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromFiles <a name="IcebergTableFromFiles" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files snowflake_iceberg_table_from_files}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFiles;

IcebergTableFromFiles.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .metadataFilePath(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .catalog(java.lang.String)
//  .comment(java.lang.String)
//  .externalVolume(java.lang.String)
//  .id(java.lang.String)
//  .replaceInvalidCharacters(java.lang.Boolean|IResolvable)
//  .timeouts(IcebergTableFromFilesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.metadataFilePath">metadataFilePath</a></code> | <code>java.lang.String</code> | Specifies the relative path of the Iceberg metadata file in the external volume. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#id IcebergTableFromFiles#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#database IcebergTableFromFiles#database}

---

##### `metadataFilePath`<sup>Required</sup> <a name="metadataFilePath" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.metadataFilePath"></a>

- *Type:* java.lang.String

Specifies the relative path of the Iceberg metadata file in the external volume.

Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#metadata_file_path IcebergTableFromFiles#metadata_file_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#name IcebergTableFromFiles#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#schema IcebergTableFromFiles#schema}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#catalog IcebergTableFromFiles#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#comment IcebergTableFromFiles#comment}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.externalVolume"></a>

- *Type:* java.lang.String

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#external_volume IcebergTableFromFiles#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#id IcebergTableFromFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#replace_invalid_characters IcebergTableFromFiles#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#timeouts IcebergTableFromFiles#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.putTimeouts"></a>

```java
public void putTimeouts(IcebergTableFromFilesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetComment"></a>

```java
public void resetComment()
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetExternalVolume"></a>

```java
public void resetExternalVolume()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetId"></a>

```java
public void resetId()
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetReplaceInvalidCharacters"></a>

```java
public void resetReplaceInvalidCharacters()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IcebergTableFromFiles resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFiles;

IcebergTableFromFiles.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFiles;

IcebergTableFromFiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFiles;

IcebergTableFromFiles.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFiles;

IcebergTableFromFiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IcebergTableFromFiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IcebergTableFromFiles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IcebergTableFromFiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IcebergTableFromFiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromFiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList">IcebergTableFromFilesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList">IcebergTableFromFilesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList">IcebergTableFromFilesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference">IcebergTableFromFilesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.externalVolumeInput">externalVolumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.metadataFilePathInput">metadataFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.metadataFilePath">metadataFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.describeOutput"></a>

```java
public IcebergTableFromFilesDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList">IcebergTableFromFilesDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.parameters"></a>

```java
public IcebergTableFromFilesParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList">IcebergTableFromFilesParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.showOutput"></a>

```java
public IcebergTableFromFilesShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList">IcebergTableFromFilesShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.timeouts"></a>

```java
public IcebergTableFromFilesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference">IcebergTableFromFilesTimeoutsOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.externalVolumeInput"></a>

```java
public java.lang.String getExternalVolumeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataFilePathInput`<sup>Optional</sup> <a name="metadataFilePathInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.metadataFilePathInput"></a>

```java
public java.lang.String getMetadataFilePathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.replaceInvalidCharactersInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharactersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.timeoutsInput"></a>

```java
public IResolvable|IcebergTableFromFilesTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadataFilePath`<sup>Required</sup> <a name="metadataFilePath" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.metadataFilePath"></a>

```java
public java.lang.String getMetadataFilePath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.replaceInvalidCharacters"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromFilesConfig <a name="IcebergTableFromFilesConfig" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesConfig;

IcebergTableFromFilesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .metadataFilePath(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .catalog(java.lang.String)
//  .comment(java.lang.String)
//  .externalVolume(java.lang.String)
//  .id(java.lang.String)
//  .replaceInvalidCharacters(java.lang.Boolean|IResolvable)
//  .timeouts(IcebergTableFromFilesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.metadataFilePath">metadataFilePath</a></code> | <code>java.lang.String</code> | Specifies the relative path of the Iceberg metadata file in the external volume. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#id IcebergTableFromFiles#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#database IcebergTableFromFiles#database}

---

##### `metadataFilePath`<sup>Required</sup> <a name="metadataFilePath" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.metadataFilePath"></a>

```java
public java.lang.String getMetadataFilePath();
```

- *Type:* java.lang.String

Specifies the relative path of the Iceberg metadata file in the external volume.

Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#metadata_file_path IcebergTableFromFiles#metadata_file_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#name IcebergTableFromFiles#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#schema IcebergTableFromFiles#schema}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#catalog IcebergTableFromFiles#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#comment IcebergTableFromFiles#comment}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#external_volume IcebergTableFromFiles#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#id IcebergTableFromFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.replaceInvalidCharacters"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#replace_invalid_characters IcebergTableFromFiles#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.timeouts"></a>

```java
public IcebergTableFromFilesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#timeouts IcebergTableFromFiles#timeouts}

---

### IcebergTableFromFilesDescribeOutput <a name="IcebergTableFromFilesDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesDescribeOutput;

IcebergTableFromFilesDescribeOutput.builder()
    .build();
```


### IcebergTableFromFilesParameters <a name="IcebergTableFromFilesParameters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParameters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParameters;

IcebergTableFromFilesParameters.builder()
    .build();
```


### IcebergTableFromFilesParametersCatalog <a name="IcebergTableFromFilesParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalog.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersCatalog;

IcebergTableFromFilesParametersCatalog.builder()
    .build();
```


### IcebergTableFromFilesParametersExternalVolume <a name="IcebergTableFromFilesParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolume.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersExternalVolume;

IcebergTableFromFilesParametersExternalVolume.builder()
    .build();
```


### IcebergTableFromFilesParametersReplaceInvalidCharacters <a name="IcebergTableFromFilesParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharacters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersReplaceInvalidCharacters;

IcebergTableFromFilesParametersReplaceInvalidCharacters.builder()
    .build();
```


### IcebergTableFromFilesShowOutput <a name="IcebergTableFromFilesShowOutput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutput;

IcebergTableFromFilesShowOutput.builder()
    .build();
```


### IcebergTableFromFilesShowOutputAutoRefreshStatus <a name="IcebergTableFromFilesShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatus.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputAutoRefreshStatus;

IcebergTableFromFilesShowOutputAutoRefreshStatus.builder()
    .build();
```


### IcebergTableFromFilesShowOutputPartitionSpecs <a name="IcebergTableFromFilesShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecs.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputPartitionSpecs;

IcebergTableFromFilesShowOutputPartitionSpecs.builder()
    .build();
```


### IcebergTableFromFilesShowOutputPartitionSpecsFields <a name="IcebergTableFromFilesShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFields.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputPartitionSpecsFields;

IcebergTableFromFilesShowOutputPartitionSpecsFields.builder()
    .build();
```


### IcebergTableFromFilesTimeouts <a name="IcebergTableFromFilesTimeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesTimeouts;

IcebergTableFromFilesTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#create IcebergTableFromFiles#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#delete IcebergTableFromFiles#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#read IcebergTableFromFiles#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#update IcebergTableFromFiles#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#create IcebergTableFromFiles#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#delete IcebergTableFromFiles#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#read IcebergTableFromFiles#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#update IcebergTableFromFiles#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromFilesDescribeOutputList <a name="IcebergTableFromFilesDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesDescribeOutputList;

new IcebergTableFromFilesDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.get"></a>

```java
public IcebergTableFromFilesDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromFilesDescribeOutputOutputReference <a name="IcebergTableFromFilesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesDescribeOutputOutputReference;

new IcebergTableFromFilesDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.check">check</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.sourceIcebergType">sourceIcebergType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.writeDefault">writeDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutput">IcebergTableFromFilesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.check"></a>

```java
public java.lang.String getCheck();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.isNullable"></a>

```java
public IResolvable getIsNullable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.nameMapping"></a>

```java
public java.lang.String getNameMapping();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.primaryKey"></a>

```java
public IResolvable getPrimaryKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.privacyDomain"></a>

```java
public java.lang.String getPrivacyDomain();
```

- *Type:* java.lang.String

---

##### `sourceIcebergType`<sup>Required</sup> <a name="sourceIcebergType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.sourceIcebergType"></a>

```java
public java.lang.String getSourceIcebergType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.uniqueKey"></a>

```java
public IResolvable getUniqueKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `writeDefault`<sup>Required</sup> <a name="writeDefault" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.writeDefault"></a>

```java
public java.lang.String getWriteDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.internalValue"></a>

```java
public IcebergTableFromFilesDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutput">IcebergTableFromFilesDescribeOutput</a>

---


### IcebergTableFromFilesParametersCatalogList <a name="IcebergTableFromFilesParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersCatalogList;

new IcebergTableFromFilesParametersCatalogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.get"></a>

```java
public IcebergTableFromFilesParametersCatalogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromFilesParametersCatalogOutputReference <a name="IcebergTableFromFilesParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersCatalogOutputReference;

new IcebergTableFromFilesParametersCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalog">IcebergTableFromFilesParametersCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.internalValue"></a>

```java
public IcebergTableFromFilesParametersCatalog getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalog">IcebergTableFromFilesParametersCatalog</a>

---


### IcebergTableFromFilesParametersExternalVolumeList <a name="IcebergTableFromFilesParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersExternalVolumeList;

new IcebergTableFromFilesParametersExternalVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.get"></a>

```java
public IcebergTableFromFilesParametersExternalVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromFilesParametersExternalVolumeOutputReference <a name="IcebergTableFromFilesParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersExternalVolumeOutputReference;

new IcebergTableFromFilesParametersExternalVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolume">IcebergTableFromFilesParametersExternalVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.internalValue"></a>

```java
public IcebergTableFromFilesParametersExternalVolume getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolume">IcebergTableFromFilesParametersExternalVolume</a>

---


### IcebergTableFromFilesParametersList <a name="IcebergTableFromFilesParametersList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersList;

new IcebergTableFromFilesParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.get"></a>

```java
public IcebergTableFromFilesParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromFilesParametersOutputReference <a name="IcebergTableFromFilesParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersOutputReference;

new IcebergTableFromFilesParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList">IcebergTableFromFilesParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.externalVolume">externalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList">IcebergTableFromFilesParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList">IcebergTableFromFilesParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParameters">IcebergTableFromFilesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.catalog"></a>

```java
public IcebergTableFromFilesParametersCatalogList getCatalog();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList">IcebergTableFromFilesParametersCatalogList</a>

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.externalVolume"></a>

```java
public IcebergTableFromFilesParametersExternalVolumeList getExternalVolume();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList">IcebergTableFromFilesParametersExternalVolumeList</a>

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.replaceInvalidCharacters"></a>

```java
public IcebergTableFromFilesParametersReplaceInvalidCharactersList getReplaceInvalidCharacters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList">IcebergTableFromFilesParametersReplaceInvalidCharactersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.internalValue"></a>

```java
public IcebergTableFromFilesParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParameters">IcebergTableFromFilesParameters</a>

---


### IcebergTableFromFilesParametersReplaceInvalidCharactersList <a name="IcebergTableFromFilesParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersReplaceInvalidCharactersList;

new IcebergTableFromFilesParametersReplaceInvalidCharactersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.get"></a>

```java
public IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference;

new IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharacters">IcebergTableFromFilesParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```java
public IcebergTableFromFilesParametersReplaceInvalidCharacters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharacters">IcebergTableFromFilesParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromFilesShowOutputAutoRefreshStatusList <a name="IcebergTableFromFilesShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputAutoRefreshStatusList;

new IcebergTableFromFilesShowOutputAutoRefreshStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.get"></a>

```java
public IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference;

new IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">currentSnapshotId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.executionState">executionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">lastSnapshotTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pendingSnapshotCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatus">IcebergTableFromFilesShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentSnapshotId`<sup>Required</sup> <a name="currentSnapshotId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```java
public java.lang.Number getCurrentSnapshotId();
```

- *Type:* java.lang.Number

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```java
public java.lang.String getExecutionState();
```

- *Type:* java.lang.String

---

##### `lastSnapshotTime`<sup>Required</sup> <a name="lastSnapshotTime" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```java
public java.lang.String getLastSnapshotTime();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `pendingSnapshotCount`<sup>Required</sup> <a name="pendingSnapshotCount" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```java
public java.lang.Number getPendingSnapshotCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```java
public IcebergTableFromFilesShowOutputAutoRefreshStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatus">IcebergTableFromFilesShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromFilesShowOutputList <a name="IcebergTableFromFilesShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputList;

new IcebergTableFromFilesShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.get"></a>

```java
public IcebergTableFromFilesShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromFilesShowOutputOutputReference <a name="IcebergTableFromFilesShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputOutputReference;

new IcebergTableFromFilesShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.autoRefreshStatus">autoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList">IcebergTableFromFilesShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.baseLocation">baseLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.canWriteMetadata">canWriteMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogSyncName">catalogSyncName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogTableName">catalogTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.currentPartitionSpecId">currentPartitionSpecId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.externalVolumeName">externalVolumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.icebergTableFormatVersion">icebergTableFormatVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.icebergTableType">icebergTableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.partitionSpecs">partitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList">IcebergTableFromFilesShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutput">IcebergTableFromFilesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRefreshStatus`<sup>Required</sup> <a name="autoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.autoRefreshStatus"></a>

```java
public IcebergTableFromFilesShowOutputAutoRefreshStatusList getAutoRefreshStatus();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList">IcebergTableFromFilesShowOutputAutoRefreshStatusList</a>

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.baseLocation"></a>

```java
public java.lang.String getBaseLocation();
```

- *Type:* java.lang.String

---

##### `canWriteMetadata`<sup>Required</sup> <a name="canWriteMetadata" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.canWriteMetadata"></a>

```java
public IResolvable getCanWriteMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

---

##### `catalogSyncName`<sup>Required</sup> <a name="catalogSyncName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogSyncName"></a>

```java
public java.lang.String getCatalogSyncName();
```

- *Type:* java.lang.String

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogTableName"></a>

```java
public java.lang.String getCatalogTableName();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `currentPartitionSpecId`<sup>Required</sup> <a name="currentPartitionSpecId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.currentPartitionSpecId"></a>

```java
public java.lang.Number getCurrentPartitionSpecId();
```

- *Type:* java.lang.Number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `externalVolumeName`<sup>Required</sup> <a name="externalVolumeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.externalVolumeName"></a>

```java
public java.lang.String getExternalVolumeName();
```

- *Type:* java.lang.String

---

##### `icebergTableFormatVersion`<sup>Required</sup> <a name="icebergTableFormatVersion" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```java
public java.lang.Number getIcebergTableFormatVersion();
```

- *Type:* java.lang.Number

---

##### `icebergTableType`<sup>Required</sup> <a name="icebergTableType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.icebergTableType"></a>

```java
public java.lang.String getIcebergTableType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.nameMapping"></a>

```java
public java.lang.String getNameMapping();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `partitionSpecs`<sup>Required</sup> <a name="partitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.partitionSpecs"></a>

```java
public IcebergTableFromFilesShowOutputPartitionSpecsList getPartitionSpecs();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList">IcebergTableFromFilesShowOutputPartitionSpecsList</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.internalValue"></a>

```java
public IcebergTableFromFilesShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutput">IcebergTableFromFilesShowOutput</a>

---


### IcebergTableFromFilesShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromFilesShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList;

new IcebergTableFromFilesShowOutputPartitionSpecsFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.get"></a>

```java
public IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference;

new IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFields">IcebergTableFromFilesShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```java
public java.lang.Number getFieldId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```java
public IcebergTableFromFilesShowOutputPartitionSpecsFields getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFields">IcebergTableFromFilesShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromFilesShowOutputPartitionSpecsList <a name="IcebergTableFromFilesShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputPartitionSpecsList;

new IcebergTableFromFilesShowOutputPartitionSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.get"></a>

```java
public IcebergTableFromFilesShowOutputPartitionSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromFilesShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromFilesShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference;

new IcebergTableFromFilesShowOutputPartitionSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromFilesShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.specId">specId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecs">IcebergTableFromFilesShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.fields"></a>

```java
public IcebergTableFromFilesShowOutputPartitionSpecsFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromFilesShowOutputPartitionSpecsFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.specId"></a>

```java
public java.lang.Number getSpecId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```java
public IcebergTableFromFilesShowOutputPartitionSpecs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecs">IcebergTableFromFilesShowOutputPartitionSpecs</a>

---


### IcebergTableFromFilesTimeoutsOutputReference <a name="IcebergTableFromFilesTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_files.IcebergTableFromFilesTimeoutsOutputReference;

new IcebergTableFromFilesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|IcebergTableFromFilesTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a>

---



