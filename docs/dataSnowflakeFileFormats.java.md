# `dataSnowflakeFileFormats` Submodule <a name="`dataSnowflakeFileFormats` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeFileFormats <a name="DataSnowflakeFileFormats" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats snowflake_file_formats}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormats;

DataSnowflakeFileFormats.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeFileFormatsIn)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#in DataSnowflakeFileFormats#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#like DataSnowflakeFileFormats#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#with_describe DataSnowflakeFileFormats#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn"></a>

```java
public void putIn(DataSnowflakeFileFormatsIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId"></a>

```java
public void resetId()
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetIn"></a>

```java
public void resetIn()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetLike"></a>

```java
public void resetLike()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeFileFormats resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormats;

DataSnowflakeFileFormats.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormats;

DataSnowflakeFileFormats.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormats;

DataSnowflakeFileFormats.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormats;

DataSnowflakeFileFormats.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeFileFormats.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeFileFormats resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeFileFormats to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeFileFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeFileFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats">fileFormats</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference">DataSnowflakeFileFormatsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `fileFormats`<sup>Required</sup> <a name="fileFormats" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats"></a>

```java
public DataSnowflakeFileFormatsFileFormatsList getFileFormats();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.in"></a>

```java
public DataSnowflakeFileFormatsInOutputReference getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference">DataSnowflakeFileFormatsInOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.inInput"></a>

```java
public DataSnowflakeFileFormatsIn getInInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeFileFormatsConfig <a name="DataSnowflakeFileFormatsConfig" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsConfig;

DataSnowflakeFileFormatsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeFileFormatsIn)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.in"></a>

```java
public DataSnowflakeFileFormatsIn getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#in DataSnowflakeFileFormats#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#like DataSnowflakeFileFormats#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#with_describe DataSnowflakeFileFormats#with_describe}

---

### DataSnowflakeFileFormatsFileFormats <a name="DataSnowflakeFileFormatsFileFormats" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsFileFormats;

DataSnowflakeFileFormatsFileFormats.builder()
    .build();
```


### DataSnowflakeFileFormatsFileFormatsDescribeOutput <a name="DataSnowflakeFileFormatsFileFormatsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsFileFormatsDescribeOutput;

DataSnowflakeFileFormatsFileFormatsDescribeOutput.builder()
    .build();
```


### DataSnowflakeFileFormatsFileFormatsShowOutput <a name="DataSnowflakeFileFormatsFileFormatsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsFileFormatsShowOutput;

DataSnowflakeFileFormatsFileFormatsShowOutput.builder()
    .build();
```


### DataSnowflakeFileFormatsIn <a name="DataSnowflakeFileFormatsIn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsIn;

DataSnowflakeFileFormatsIn.builder()
//  .account(java.lang.Boolean|IResolvable)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.database">database</a></code> | <code>java.lang.String</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.schema">schema</a></code> | <code>java.lang.String</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#account DataSnowflakeFileFormats#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#database DataSnowflakeFileFormats#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#schema DataSnowflakeFileFormats#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeFileFormatsFileFormatsDescribeOutputList <a name="DataSnowflakeFileFormatsFileFormatsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList;

new DataSnowflakeFileFormatsFileFormatsDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.get"></a>

```java
public DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference <a name="DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference;

new DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.allowDuplicate">allowDuplicate</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryAsText">binaryAsText</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.disableAutoConvert">disableAutoConvert</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.enableOctal">enableOctal</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escape">escape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fileExtension">fileExtension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.multiLine">multiLine</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.nullIf">nullIf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.parseHeader">parseHeader</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.preserveSpace">preserveSpace</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipBlankLines">skipBlankLines</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipHeader">skipHeader</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripNullValues">stripNullValues</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterArray">stripOuterArray</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterElement">stripOuterElement</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.trimSpace">trimSpace</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useLogicalType">useLogicalType</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useVectorizedScanner">useVectorizedScanner</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.validateUtf8">validateUtf8</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput">DataSnowflakeFileFormatsFileFormatsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.allowDuplicate"></a>

```java
public IResolvable getAllowDuplicate();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `binaryAsText`<sup>Required</sup> <a name="binaryAsText" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryAsText"></a>

```java
public IResolvable getBinaryAsText();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryFormat"></a>

```java
public java.lang.String getBinaryFormat();
```

- *Type:* java.lang.String

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

---

##### `disableAutoConvert`<sup>Required</sup> <a name="disableAutoConvert" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.disableAutoConvert"></a>

```java
public IResolvable getDisableAutoConvert();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="emptyFieldAsNull" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.emptyFieldAsNull"></a>

```java
public IResolvable getEmptyFieldAsNull();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.enableOctal"></a>

```java
public IResolvable getEnableOctal();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="errorOnColumnCountMismatch" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.errorOnColumnCountMismatch"></a>

```java
public IResolvable getErrorOnColumnCountMismatch();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escape"></a>

```java
public java.lang.String getEscape();
```

- *Type:* java.lang.String

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="escapeUnenclosedField" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escapeUnenclosedField"></a>

```java
public java.lang.String getEscapeUnenclosedField();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy"></a>

```java
public java.lang.String getFieldOptionallyEnclosedBy();
```

- *Type:* java.lang.String

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fileExtension"></a>

```java
public java.lang.String getFileExtension();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.ignoreUtf8Errors"></a>

```java
public IResolvable getIgnoreUtf8Errors();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.multiLine"></a>

```java
public IResolvable getMultiLine();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.nullIf"></a>

```java
public java.util.List<java.lang.String> getNullIf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parseHeader`<sup>Required</sup> <a name="parseHeader" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.parseHeader"></a>

```java
public IResolvable getParseHeader();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `preserveSpace`<sup>Required</sup> <a name="preserveSpace" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.preserveSpace"></a>

```java
public IResolvable getPreserveSpace();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.recordDelimiter"></a>

```java
public java.lang.String getRecordDelimiter();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```java
public IResolvable getReplaceInvalidCharacters();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `skipBlankLines`<sup>Required</sup> <a name="skipBlankLines" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipBlankLines"></a>

```java
public IResolvable getSkipBlankLines();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```java
public IResolvable getSkipByteOrderMark();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `skipHeader`<sup>Required</sup> <a name="skipHeader" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipHeader"></a>

```java
public java.lang.Number getSkipHeader();
```

- *Type:* java.lang.Number

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripNullValues"></a>

```java
public IResolvable getStripNullValues();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterArray"></a>

```java
public IResolvable getStripOuterArray();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `stripOuterElement`<sup>Required</sup> <a name="stripOuterElement" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterElement"></a>

```java
public IResolvable getStripOuterElement();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.trimSpace"></a>

```java
public IResolvable getTrimSpace();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `useLogicalType`<sup>Required</sup> <a name="useLogicalType" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useLogicalType"></a>

```java
public IResolvable getUseLogicalType();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useVectorizedScanner`<sup>Required</sup> <a name="useVectorizedScanner" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useVectorizedScanner"></a>

```java
public IResolvable getUseVectorizedScanner();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `validateUtf8`<sup>Required</sup> <a name="validateUtf8" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.validateUtf8"></a>

```java
public IResolvable getValidateUtf8();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeFileFormatsFileFormatsDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput">DataSnowflakeFileFormatsFileFormatsDescribeOutput</a>

---


### DataSnowflakeFileFormatsFileFormatsList <a name="DataSnowflakeFileFormatsFileFormatsList" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsFileFormatsList;

new DataSnowflakeFileFormatsFileFormatsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get"></a>

```java
public DataSnowflakeFileFormatsFileFormatsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeFileFormatsFileFormatsOutputReference <a name="DataSnowflakeFileFormatsFileFormatsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsFileFormatsOutputReference;

new DataSnowflakeFileFormatsFileFormatsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList">DataSnowflakeFileFormatsFileFormatsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList">DataSnowflakeFileFormatsFileFormatsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeFileFormatsFileFormatsDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList">DataSnowflakeFileFormatsFileFormatsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.showOutput"></a>

```java
public DataSnowflakeFileFormatsFileFormatsShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList">DataSnowflakeFileFormatsFileFormatsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeFileFormatsFileFormats getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a>

---


### DataSnowflakeFileFormatsFileFormatsShowOutputList <a name="DataSnowflakeFileFormatsFileFormatsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsFileFormatsShowOutputList;

new DataSnowflakeFileFormatsFileFormatsShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.get"></a>

```java
public DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference <a name="DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference;

new DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.formatOptions">formatOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput">DataSnowflakeFileFormatsFileFormatsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.formatOptions"></a>

```java
public java.lang.String getFormatOptions();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeFileFormatsFileFormatsShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput">DataSnowflakeFileFormatsFileFormatsShowOutput</a>

---


### DataSnowflakeFileFormatsInOutputReference <a name="DataSnowflakeFileFormatsInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_file_formats.DataSnowflakeFileFormatsInOutputReference;

new DataSnowflakeFileFormatsInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.accountInput"></a>

```java
public java.lang.Boolean|IResolvable getAccountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.internalValue"></a>

```java
public DataSnowflakeFileFormatsIn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

---



