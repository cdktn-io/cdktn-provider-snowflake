# `dataSnowflakeIcebergTables` Submodule <a name="`dataSnowflakeIcebergTables` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeIcebergTables <a name="DataSnowflakeIcebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables snowflake_iceberg_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTables;

DataSnowflakeIcebergTables.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeIcebergTablesIn)
//  .like(java.lang.String)
//  .limit(DataSnowflakeIcebergTablesLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
//  .withParameters(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.withParameters">withParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#in DataSnowflakeIcebergTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#like DataSnowflakeIcebergTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#limit DataSnowflakeIcebergTables#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.startsWith"></a>

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#starts_with DataSnowflakeIcebergTables#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#with_describe DataSnowflakeIcebergTables#with_describe}

---

##### `withParameters`<sup>Optional</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.withParameters"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#with_parameters DataSnowflakeIcebergTables#with_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithParameters">resetWithParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn"></a>

```java
public void putIn(DataSnowflakeIcebergTablesIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit"></a>

```java
public void putLimit(DataSnowflakeIcebergTablesLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetId"></a>

```java
public void resetId()
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetIn"></a>

```java
public void resetIn()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLike"></a>

```java
public void resetLike()
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetStartsWith"></a>

```java
public void resetStartsWith()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

##### `resetWithParameters` <a name="resetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithParameters"></a>

```java
public void resetWithParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeIcebergTables resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTables;

DataSnowflakeIcebergTables.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTables;

DataSnowflakeIcebergTables.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTables;

DataSnowflakeIcebergTables.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTables;

DataSnowflakeIcebergTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeIcebergTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeIcebergTables resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeIcebergTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeIcebergTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeIcebergTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.icebergTables">icebergTables</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList">DataSnowflakeIcebergTablesIcebergTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference">DataSnowflakeIcebergTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference">DataSnowflakeIcebergTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWithInput">startsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParametersInput">withParametersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParameters">withParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `icebergTables`<sup>Required</sup> <a name="icebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.icebergTables"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesList getIcebergTables();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList">DataSnowflakeIcebergTablesIcebergTablesList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.in"></a>

```java
public DataSnowflakeIcebergTablesInOutputReference getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference">DataSnowflakeIcebergTablesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limit"></a>

```java
public DataSnowflakeIcebergTablesLimitOutputReference getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference">DataSnowflakeIcebergTablesLimitOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.inInput"></a>

```java
public DataSnowflakeIcebergTablesIn getInInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limitInput"></a>

```java
public DataSnowflakeIcebergTablesLimit getLimitInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWithInput"></a>

```java
public java.lang.String getStartsWithInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withParametersInput`<sup>Optional</sup> <a name="withParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParametersInput"></a>

```java
public java.lang.Boolean|IResolvable getWithParametersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withParameters`<sup>Required</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParameters"></a>

```java
public java.lang.Boolean|IResolvable getWithParameters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeIcebergTablesConfig <a name="DataSnowflakeIcebergTablesConfig" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesConfig;

DataSnowflakeIcebergTablesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeIcebergTablesIn)
//  .like(java.lang.String)
//  .limit(DataSnowflakeIcebergTablesLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
//  .withParameters(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withParameters">withParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.in"></a>

```java
public DataSnowflakeIcebergTablesIn getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#in DataSnowflakeIcebergTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#like DataSnowflakeIcebergTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.limit"></a>

```java
public DataSnowflakeIcebergTablesLimit getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#limit DataSnowflakeIcebergTables#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#starts_with DataSnowflakeIcebergTables#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#with_describe DataSnowflakeIcebergTables#with_describe}

---

##### `withParameters`<sup>Optional</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withParameters"></a>

```java
public java.lang.Boolean|IResolvable getWithParameters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#with_parameters DataSnowflakeIcebergTables#with_parameters}

---

### DataSnowflakeIcebergTablesIcebergTables <a name="DataSnowflakeIcebergTablesIcebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTables;

DataSnowflakeIcebergTablesIcebergTables.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesDescribeOutput <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput;

DataSnowflakeIcebergTablesIcebergTablesDescribeOutput.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParameters <a name="DataSnowflakeIcebergTablesIcebergTablesParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParameters;

DataSnowflakeIcebergTablesIcebergTablesParameters.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalog <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalog" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog;

DataSnowflakeIcebergTablesIcebergTablesParametersCatalog.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync;

DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays;

DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction;

DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead;

DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume;

DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior;

DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays;

DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters;

DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy;

DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize;

DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutput <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutput;

DataSnowflakeIcebergTablesIcebergTablesShowOutput.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus;

DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs;

DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs.builder()
    .build();
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields;

DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields.builder()
    .build();
```


### DataSnowflakeIcebergTablesIn <a name="DataSnowflakeIcebergTablesIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIn;

DataSnowflakeIcebergTablesIn.builder()
//  .account(java.lang.Boolean|IResolvable)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.database">database</a></code> | <code>java.lang.String</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.schema">schema</a></code> | <code>java.lang.String</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#account DataSnowflakeIcebergTables#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#database DataSnowflakeIcebergTables#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#schema DataSnowflakeIcebergTables#schema}

---

### DataSnowflakeIcebergTablesLimit <a name="DataSnowflakeIcebergTablesLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesLimit;

DataSnowflakeIcebergTablesLimit.builder()
    .rows(java.lang.Number)
//  .from(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.rows">rows</a></code> | <code>java.lang.Number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.from">from</a></code> | <code>java.lang.String</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#rows DataSnowflakeIcebergTables#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#from DataSnowflakeIcebergTables#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList;

new DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.check">check</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.sourceIcebergType">sourceIcebergType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.writeDefault">writeDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput">DataSnowflakeIcebergTablesIcebergTablesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.check"></a>

```java
public java.lang.String getCheck();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.isNullable"></a>

```java
public IResolvable getIsNullable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.nameMapping"></a>

```java
public java.lang.String getNameMapping();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.primaryKey"></a>

```java
public IResolvable getPrimaryKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.privacyDomain"></a>

```java
public java.lang.String getPrivacyDomain();
```

- *Type:* java.lang.String

---

##### `sourceIcebergType`<sup>Required</sup> <a name="sourceIcebergType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.sourceIcebergType"></a>

```java
public java.lang.String getSourceIcebergType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.uniqueKey"></a>

```java
public IResolvable getUniqueKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `writeDefault`<sup>Required</sup> <a name="writeDefault" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.writeDefault"></a>

```java
public java.lang.String getWriteDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput">DataSnowflakeIcebergTablesIcebergTablesDescribeOutput</a>

---


### DataSnowflakeIcebergTablesIcebergTablesList <a name="DataSnowflakeIcebergTablesIcebergTablesList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesList;

new DataSnowflakeIcebergTablesIcebergTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList">DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList">DataSnowflakeIcebergTablesIcebergTablesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList">DataSnowflakeIcebergTablesIcebergTablesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables">DataSnowflakeIcebergTablesIcebergTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList">DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.parameters"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList">DataSnowflakeIcebergTablesIcebergTablesParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.showOutput"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList">DataSnowflakeIcebergTablesIcebergTablesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTables getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables">DataSnowflakeIcebergTablesIcebergTables</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog">DataSnowflakeIcebergTablesIcebergTablesParametersCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalog getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog">DataSnowflakeIcebergTablesIcebergTablesParametersCatalog</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList;

new DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList;

new DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList;

new DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersList;

new DataSnowflakeIcebergTablesIcebergTablesParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList;

new DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalogSync">catalogSync</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableDataCompaction">enableDataCompaction</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableIcebergMergeOnRead">enableIcebergMergeOnRead</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.externalVolume">externalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.icebergMergeOnReadBehavior">icebergMergeOnReadBehavior</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.targetFileSize">targetFileSize</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters">DataSnowflakeIcebergTablesIcebergTablesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalog"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList getCatalog();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList</a>

---

##### `catalogSync`<sup>Required</sup> <a name="catalogSync" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalogSync"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList getCatalogSync();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList</a>

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.dataRetentionTimeInDays"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList getDataRetentionTimeInDays();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList</a>

---

##### `enableDataCompaction`<sup>Required</sup> <a name="enableDataCompaction" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableDataCompaction"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList getEnableDataCompaction();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList</a>

---

##### `enableIcebergMergeOnRead`<sup>Required</sup> <a name="enableIcebergMergeOnRead" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableIcebergMergeOnRead"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList getEnableIcebergMergeOnRead();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList</a>

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.externalVolume"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList getExternalVolume();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList</a>

---

##### `icebergMergeOnReadBehavior`<sup>Required</sup> <a name="icebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.icebergMergeOnReadBehavior"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList getIcebergMergeOnReadBehavior();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList</a>

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList getMaxDataExtensionTimeInDays();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList</a>

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.replaceInvalidCharacters"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList getReplaceInvalidCharacters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList</a>

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.storageSerializationPolicy"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList getStorageSerializationPolicy();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList</a>

---

##### `targetFileSize`<sup>Required</sup> <a name="targetFileSize" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.targetFileSize"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList getTargetFileSize();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters">DataSnowflakeIcebergTablesIcebergTablesParameters</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList;

new DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList;

new DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList;

new DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">currentSnapshotId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.executionState">executionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">lastSnapshotTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pendingSnapshotCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentSnapshotId`<sup>Required</sup> <a name="currentSnapshotId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```java
public java.lang.Number getCurrentSnapshotId();
```

- *Type:* java.lang.Number

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```java
public java.lang.String getExecutionState();
```

- *Type:* java.lang.String

---

##### `lastSnapshotTime`<sup>Required</sup> <a name="lastSnapshotTime" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```java
public java.lang.String getLastSnapshotTime();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `pendingSnapshotCount`<sup>Required</sup> <a name="pendingSnapshotCount" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```java
public java.lang.Number getPendingSnapshotCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.autoRefreshStatus">autoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.baseLocation">baseLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.canWriteMetadata">canWriteMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogSyncName">catalogSyncName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogTableName">catalogTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.currentPartitionSpecId">currentPartitionSpecId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.externalVolumeName">externalVolumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableFormatVersion">icebergTableFormatVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableType">icebergTableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.partitionSpecs">partitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput">DataSnowflakeIcebergTablesIcebergTablesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRefreshStatus`<sup>Required</sup> <a name="autoRefreshStatus" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.autoRefreshStatus"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList getAutoRefreshStatus();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList</a>

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.baseLocation"></a>

```java
public java.lang.String getBaseLocation();
```

- *Type:* java.lang.String

---

##### `canWriteMetadata`<sup>Required</sup> <a name="canWriteMetadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.canWriteMetadata"></a>

```java
public IResolvable getCanWriteMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

---

##### `catalogSyncName`<sup>Required</sup> <a name="catalogSyncName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogSyncName"></a>

```java
public java.lang.String getCatalogSyncName();
```

- *Type:* java.lang.String

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogTableName"></a>

```java
public java.lang.String getCatalogTableName();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `currentPartitionSpecId`<sup>Required</sup> <a name="currentPartitionSpecId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.currentPartitionSpecId"></a>

```java
public java.lang.Number getCurrentPartitionSpecId();
```

- *Type:* java.lang.Number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `externalVolumeName`<sup>Required</sup> <a name="externalVolumeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.externalVolumeName"></a>

```java
public java.lang.String getExternalVolumeName();
```

- *Type:* java.lang.String

---

##### `icebergTableFormatVersion`<sup>Required</sup> <a name="icebergTableFormatVersion" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```java
public java.lang.Number getIcebergTableFormatVersion();
```

- *Type:* java.lang.Number

---

##### `icebergTableType`<sup>Required</sup> <a name="icebergTableType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableType"></a>

```java
public java.lang.String getIcebergTableType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.nameMapping"></a>

```java
public java.lang.String getNameMapping();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `partitionSpecs`<sup>Required</sup> <a name="partitionSpecs" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.partitionSpecs"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList getPartitionSpecs();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput">DataSnowflakeIcebergTablesIcebergTablesShowOutput</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```java
public java.lang.Number getFieldId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.specId">specId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fields"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.specId"></a>

```java
public java.lang.Number getSpecId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs</a>

---


### DataSnowflakeIcebergTablesInOutputReference <a name="DataSnowflakeIcebergTablesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesInOutputReference;

new DataSnowflakeIcebergTablesInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.accountInput"></a>

```java
public java.lang.Boolean|IResolvable getAccountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesIn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---


### DataSnowflakeIcebergTablesLimitOutputReference <a name="DataSnowflakeIcebergTablesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_iceberg_tables.DataSnowflakeIcebergTablesLimitOutputReference;

new DataSnowflakeIcebergTablesLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resetFrom"></a>

```java
public void resetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rowsInput"></a>

```java
public java.lang.Number getRowsInput();
```

- *Type:* java.lang.Number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.internalValue"></a>

```java
public DataSnowflakeIcebergTablesLimit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---



