# `storageLifecyclePolicy` Submodule <a name="`storageLifecyclePolicy` Submodule" id="@cdktn/provider-snowflake.storageLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageLifecyclePolicy <a name="StorageLifecyclePolicy" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy snowflake_storage_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicy;

StorageLifecyclePolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .argument(IResolvable|java.util.List<StorageLifecyclePolicyArgument>)
    .body(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .archiveForDays(java.lang.Number)
//  .archiveTier(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StorageLifecyclePolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.argument">argument</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>></code> | argument block. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | Specifies the SQL expression. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the storage lifecycle policy; |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.archiveForDays">archiveForDays</a></code> | <code>java.lang.Number</code> | Specifies the number of days to keep rows that match the policy expression in archive storage. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.archiveTier">archiveTier</a></code> | <code>java.lang.String</code> | Specifies the type of storage tier to use for archiving rows. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.argument"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>>

argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#argument StorageLifecyclePolicy#argument}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.body"></a>

- *Type:* java.lang.String

Specifies the SQL expression.

The expression can be any boolean-valued SQL expression. To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#body StorageLifecyclePolicy#body}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#database StorageLifecyclePolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the storage lifecycle policy;

must be unique for the database and schema in which the storage lifecycle policy is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#schema StorageLifecyclePolicy#schema}

---

##### `archiveForDays`<sup>Optional</sup> <a name="archiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.archiveForDays"></a>

- *Type:* java.lang.Number

Specifies the number of days to keep rows that match the policy expression in archive storage.

If set, Snowflake moves the data into archive storage according to the value you select for archive_tier. If unset, Snowflake expires the rows from the table without archiving the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#archive_for_days StorageLifecyclePolicy#archive_for_days}

---

##### `archiveTier`<sup>Optional</sup> <a name="archiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.archiveTier"></a>

- *Type:* java.lang.String

Specifies the type of storage tier to use for archiving rows.

After you set the ARCHIVE_TIER for a policy, you can’t modify it. If you don’t specify this parameter, the policy is an expiration policy that deletes rows without archiving them. Valid values are (case-insensitive): `COOL` | `COLD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#archive_tier StorageLifecyclePolicy#archive_tier}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the storage lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#comment StorageLifecyclePolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#timeouts StorageLifecyclePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument">putArgument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveForDays">resetArchiveForDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveTier">resetArchiveTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArgument` <a name="putArgument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument"></a>

```java
public void putArgument(IResolvable|java.util.List<StorageLifecyclePolicyArgument> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts"></a>

```java
public void putTimeouts(StorageLifecyclePolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---

##### `resetArchiveForDays` <a name="resetArchiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveForDays"></a>

```java
public void resetArchiveForDays()
```

##### `resetArchiveTier` <a name="resetArchiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveTier"></a>

```java
public void resetArchiveTier()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicy;

StorageLifecyclePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicy;

StorageLifecyclePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicy;

StorageLifecyclePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicy;

StorageLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StorageLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StorageLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argument">argument</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList">StorageLifecyclePolicyArgumentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList">StorageLifecyclePolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList">StorageLifecyclePolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference">StorageLifecyclePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDaysInput">archiveForDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTierInput">archiveTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argumentInput">argumentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDays">archiveForDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTier">archiveTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argument"></a>

```java
public StorageLifecyclePolicyArgumentList getArgument();
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList">StorageLifecyclePolicyArgumentList</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.describeOutput"></a>

```java
public StorageLifecyclePolicyDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList">StorageLifecyclePolicyDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.showOutput"></a>

```java
public StorageLifecyclePolicyShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList">StorageLifecyclePolicyShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeouts"></a>

```java
public StorageLifecyclePolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference">StorageLifecyclePolicyTimeoutsOutputReference</a>

---

##### `archiveForDaysInput`<sup>Optional</sup> <a name="archiveForDaysInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDaysInput"></a>

```java
public java.lang.Number getArchiveForDaysInput();
```

- *Type:* java.lang.Number

---

##### `archiveTierInput`<sup>Optional</sup> <a name="archiveTierInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTierInput"></a>

```java
public java.lang.String getArchiveTierInput();
```

- *Type:* java.lang.String

---

##### `argumentInput`<sup>Optional</sup> <a name="argumentInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argumentInput"></a>

```java
public IResolvable|java.util.List<StorageLifecyclePolicyArgument> getArgumentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeoutsInput"></a>

```java
public IResolvable|StorageLifecyclePolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---

##### `archiveForDays`<sup>Required</sup> <a name="archiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDays"></a>

```java
public java.lang.Number getArchiveForDays();
```

- *Type:* java.lang.Number

---

##### `archiveTier`<sup>Required</sup> <a name="archiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTier"></a>

```java
public java.lang.String getArchiveTier();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageLifecyclePolicyArgument <a name="StorageLifecyclePolicyArgument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyArgument;

StorageLifecyclePolicyArgument.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.name">name</a></code> | <code>java.lang.String</code> | The argument name. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.type">type</a></code> | <code>java.lang.String</code> | The argument type. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types). |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The argument type. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#type StorageLifecyclePolicy#type}

---

### StorageLifecyclePolicyConfig <a name="StorageLifecyclePolicyConfig" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyConfig;

StorageLifecyclePolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .argument(IResolvable|java.util.List<StorageLifecyclePolicyArgument>)
    .body(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .archiveForDays(java.lang.Number)
//  .archiveTier(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StorageLifecyclePolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.argument">argument</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>></code> | argument block. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.body">body</a></code> | <code>java.lang.String</code> | Specifies the SQL expression. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the storage lifecycle policy; |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveForDays">archiveForDays</a></code> | <code>java.lang.Number</code> | Specifies the number of days to keep rows that match the policy expression in archive storage. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveTier">archiveTier</a></code> | <code>java.lang.String</code> | Specifies the type of storage tier to use for archiving rows. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.argument"></a>

```java
public IResolvable|java.util.List<StorageLifecyclePolicyArgument> getArgument();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>>

argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#argument StorageLifecyclePolicy#argument}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Specifies the SQL expression.

The expression can be any boolean-valued SQL expression. To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#body StorageLifecyclePolicy#body}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#database StorageLifecyclePolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the storage lifecycle policy;

must be unique for the database and schema in which the storage lifecycle policy is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#schema StorageLifecyclePolicy#schema}

---

##### `archiveForDays`<sup>Optional</sup> <a name="archiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveForDays"></a>

```java
public java.lang.Number getArchiveForDays();
```

- *Type:* java.lang.Number

Specifies the number of days to keep rows that match the policy expression in archive storage.

If set, Snowflake moves the data into archive storage according to the value you select for archive_tier. If unset, Snowflake expires the rows from the table without archiving the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#archive_for_days StorageLifecyclePolicy#archive_for_days}

---

##### `archiveTier`<sup>Optional</sup> <a name="archiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveTier"></a>

```java
public java.lang.String getArchiveTier();
```

- *Type:* java.lang.String

Specifies the type of storage tier to use for archiving rows.

After you set the ARCHIVE_TIER for a policy, you can’t modify it. If you don’t specify this parameter, the policy is an expiration policy that deletes rows without archiving them. Valid values are (case-insensitive): `COOL` | `COLD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#archive_tier StorageLifecyclePolicy#archive_tier}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the storage lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#comment StorageLifecyclePolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.timeouts"></a>

```java
public StorageLifecyclePolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#timeouts StorageLifecyclePolicy#timeouts}

---

### StorageLifecyclePolicyDescribeOutput <a name="StorageLifecyclePolicyDescribeOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyDescribeOutput;

StorageLifecyclePolicyDescribeOutput.builder()
    .build();
```


### StorageLifecyclePolicyDescribeOutputSignature <a name="StorageLifecyclePolicyDescribeOutputSignature" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyDescribeOutputSignature;

StorageLifecyclePolicyDescribeOutputSignature.builder()
    .build();
```


### StorageLifecyclePolicyShowOutput <a name="StorageLifecyclePolicyShowOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyShowOutput;

StorageLifecyclePolicyShowOutput.builder()
    .build();
```


### StorageLifecyclePolicyTimeouts <a name="StorageLifecyclePolicyTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyTimeouts;

StorageLifecyclePolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#create StorageLifecyclePolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#delete StorageLifecyclePolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#read StorageLifecyclePolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#update StorageLifecyclePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#create StorageLifecyclePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#delete StorageLifecyclePolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#read StorageLifecyclePolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#update StorageLifecyclePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageLifecyclePolicyArgumentList <a name="StorageLifecyclePolicyArgumentList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyArgumentList;

new StorageLifecyclePolicyArgumentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get"></a>

```java
public StorageLifecyclePolicyArgumentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StorageLifecyclePolicyArgument> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>>

---


### StorageLifecyclePolicyArgumentOutputReference <a name="StorageLifecyclePolicyArgumentOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyArgumentOutputReference;

new StorageLifecyclePolicyArgumentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageLifecyclePolicyArgument getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>

---


### StorageLifecyclePolicyDescribeOutputList <a name="StorageLifecyclePolicyDescribeOutputList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyDescribeOutputList;

new StorageLifecyclePolicyDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get"></a>

```java
public StorageLifecyclePolicyDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### StorageLifecyclePolicyDescribeOutputOutputReference <a name="StorageLifecyclePolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyDescribeOutputOutputReference;

new StorageLifecyclePolicyDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveForDays">archiveForDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveTier">archiveTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.returnType">returnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList">StorageLifecyclePolicyDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput">StorageLifecyclePolicyDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archiveForDays`<sup>Required</sup> <a name="archiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveForDays"></a>

```java
public java.lang.Number getArchiveForDays();
```

- *Type:* java.lang.Number

---

##### `archiveTier`<sup>Required</sup> <a name="archiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveTier"></a>

```java
public java.lang.String getArchiveTier();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.signature"></a>

```java
public StorageLifecyclePolicyDescribeOutputSignatureList getSignature();
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList">StorageLifecyclePolicyDescribeOutputSignatureList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.internalValue"></a>

```java
public StorageLifecyclePolicyDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput">StorageLifecyclePolicyDescribeOutput</a>

---


### StorageLifecyclePolicyDescribeOutputSignatureList <a name="StorageLifecyclePolicyDescribeOutputSignatureList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyDescribeOutputSignatureList;

new StorageLifecyclePolicyDescribeOutputSignatureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get"></a>

```java
public StorageLifecyclePolicyDescribeOutputSignatureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### StorageLifecyclePolicyDescribeOutputSignatureOutputReference <a name="StorageLifecyclePolicyDescribeOutputSignatureOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference;

new StorageLifecyclePolicyDescribeOutputSignatureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature">StorageLifecyclePolicyDescribeOutputSignature</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.internalValue"></a>

```java
public StorageLifecyclePolicyDescribeOutputSignature getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature">StorageLifecyclePolicyDescribeOutputSignature</a>

---


### StorageLifecyclePolicyShowOutputList <a name="StorageLifecyclePolicyShowOutputList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyShowOutputList;

new StorageLifecyclePolicyShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get"></a>

```java
public StorageLifecyclePolicyShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### StorageLifecyclePolicyShowOutputOutputReference <a name="StorageLifecyclePolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyShowOutputOutputReference;

new StorageLifecyclePolicyShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput">StorageLifecyclePolicyShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.internalValue"></a>

```java
public StorageLifecyclePolicyShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput">StorageLifecyclePolicyShowOutput</a>

---


### StorageLifecyclePolicyTimeoutsOutputReference <a name="StorageLifecyclePolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.storage_lifecycle_policy.StorageLifecyclePolicyTimeoutsOutputReference;

new StorageLifecyclePolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageLifecyclePolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---



